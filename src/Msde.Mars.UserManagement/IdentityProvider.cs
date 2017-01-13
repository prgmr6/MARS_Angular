using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Msde.Mars.Business.Entities;
using Msde.Mars.Business.Entities.AccountViewModels;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using Msde.Mars.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Msde.Mars.UserManagement
{
    public class IdentityProvider
    {

        #region Class fields and properties

        /// <summary>
        /// User Database for retrievals in process
        /// </summary>
        private static MarsDatabase _ctx;

        /// <summary>
        /// User Manager for account control
        /// </summary>
        private static UserManager<ApplicationUser> _userManager;

        /// <summary>
        /// sign in manager for authentication control
        /// </summary>
        private static SignInManager<ApplicationUser> _signInManager;

        /// <summary>
        /// 
        /// </summary>
        private static RoleManager<IdentityRole> _roleManager;

        #endregion

        #region Class methods

        /// <summary>
        /// ctor
        /// </summary>
        /// <param name="userManager"></param>
        /// <param name="signInManager"></param>
        /// <param name="context"></param>
        public IdentityProvider(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, RoleManager<IdentityRole> roleManager, MarsDatabase context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _ctx = context;
        }

        /// <summary>
        /// Login process
        /// </summary>
        /// <param name="username">raw username from ui</param>
        /// <param name="password">raw password from ui</param>
        /// <param name="userManager">injected usermanager</param>
        /// <param name="signInManager">injected signinmanager</param>
        /// <param name="ctx">injected user database</param>
        /// <returns></returns>
        public static async Task<ClaimsIdentity> GetIdentity(string username,
            string password,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager,
            MarsDatabase ctx)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _ctx = ctx;
            //await SetupRolesAndClaims();

            LoginViewModel user = new LoginViewModel() { Email = username, Password = password };
            var result = await _signInManager.PasswordSignInAsync(user.Email, user.Password, user.RememberMe, lockoutOnFailure: true);
            return await ProcessResult(result, user);
        }

        private static async Task<IdentityResult> CreateRoleAsync(string roleName)
        {
            if (await _roleManager.RoleExistsAsync(roleName))
            {
                var error = string.Format("Error: Role {0} already exists", roleName);
                var ierror = new IdentityError {Description = error};
                return IdentityResult.Failed(ierror);
            }

            return await _roleManager.CreateAsync(new IdentityRole(roleName));
            
        }

        private static async Task SetupRolesAndClaims()
        {
            var roleList = new List<string>()
            {
                //"EatSmartAdmin"
                //"UserManager"
                //"EatSmartReviewer"
                //"EatSmartBlogger"
                //"EatSmartCalendarEditor"
            };


            await roleList.ToAsyncEnumerable<string>().ForEachAsync<string>(async (t) =>
            {
                //var role = await _roleManager.FindByNameAsync(t);
                IdentityRole role = new IdentityRole();
                if (await _roleManager.RoleExistsAsync(t) == false)
                {
                    role = new IdentityRole(t);
                    await _roleManager.CreateAsync(role);

                }
                else
                {
                    role = await _roleManager.FindByNameAsync(t);
                }
                if (t == "EatSmartAdmin")
                {
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.view"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.create"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.update"));
                }
                if (t == "UserManager")
                {
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.usermanager.view"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.usermanager.create"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.usermanager.update"));
                }
                if (t == "EatSmartReviewer")
                {
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.reviewer.view"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.reviewer.create"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.reviewer.update"));
                }
                if (t == "EatSmartBlogger")
                {
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.blogger.view"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.blogger.create"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.blogger.update"));
                }
                if (t == "EatSmartCalendarEditor")
                {
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.calendar.view"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.calendar.create"));
                    await _roleManager.AddClaimAsync(role, new Claim(MARSClaimTypes.Permission, "eatsmart.calendar.update"));
                }
            });
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        private static IMarsUser FindUser(LoginViewModel user)
        {
            IMarsUser finduser = _ctx.MST_Intra_User_Profile.FirstOrDefault(a => a.username == user.Email);
            if(finduser == null)
            {
                finduser = _ctx.MST_Inter_User_Profile.FirstOrDefault(a => a.username == user.Email);
            }
            return finduser;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="result"></param>
        /// <param name="user"></param>
        /// <returns></returns>
        private static async Task<ClaimsIdentity> ProcessResult(SignInResult result, LoginViewModel login)
        {
            var roleclaims = new List<Claim>();
            ApplicationUser user = new ApplicationUser();

            // If the user did not successfully login into the new database, check the old database.
            if (result == SignInResult.Failed)
            {
                // we need to see the user exists in the database
                // if they do, then we sign them into the old database, check the credentials
                // if that is successful, then we take the password, 
                // and update the current database with the old password
                IMarsUser existUser = FindUser(login);

                if (existUser != null && existUser.isEnabled)
                {
                    if (Verify(login.Password, existUser.user_password))
                    {

                        var currUser = await _userManager.FindByNameAsync(user.Email);
                        if (currUser != null)
                        {
                            var result1 = await _userManager.AddPasswordAsync(currUser, login.Password);
                            if (result1.Succeeded)
                            {
                                user = await _userManager.FindByNameAsync(user.Email);
                                await _signInManager.SignInAsync(user, isPersistent: false);
                                return await Task.FromResult<ClaimsIdentity>(null);
                                //return user;
                            }
                            else
                            {
                                // user needs to change password
                                Claim c1 = new Claim("http://msde/claims/loginerror", "Password Error", "User Needs to Change Password");
                                roleclaims.Add(c1);
                                Claim c2 = new Claim("http://msde/claims/loginerror", "Login Error", result1.Errors.First().Description);
                                roleclaims.Add(c2);
                                //user.Claims.Add(c1);
                                await Task.FromResult(new ClaimsIdentity(new GenericIdentity(login.Email, "Error"), roleclaims));
                                //user.Claims.Add(c2);
                                return await Task.FromResult<ClaimsIdentity>(null);
                            }
                        }
                    }
                }

                if (existUser != null && existUser.isEnabled == false)
                {
                    //Claim c2 = new Claim("http://msde/claims/loginerror", "Login Error", "User is currently Disabled");
                    //roleclaims.Add(c2);
                    return await Task.FromResult(new ClaimsIdentity(new GenericIdentity(login.Email, "Error"), roleclaims));
                }
                return await Task.FromResult<ClaimsIdentity>(null);
            }

            if (result == SignInResult.LockedOut)
            {
                //Claim c1 = new Claim("http://msde/claims/loginerror", "Lockout Error", "Locked out");
                //roleclaims.Add(c1);
                return await Task.FromResult(new ClaimsIdentity(new GenericIdentity(login.Email, "Error"), roleclaims));
            }

            if (result == SignInResult.NotAllowed)
            {
                //Claim c1 = new Claim("http://msde/claims/loginerror", "Not Allowed Error", "Not Allowed");
                //roleclaims.Add(c1);
                return await Task.FromResult(new ClaimsIdentity(new GenericIdentity(login.Email, "Error"), roleclaims));
            }

            if (result == SignInResult.Success)
            {
                user.Email = login.Email;
                user = await _userManager.FindByNameAsync(user.Email);
                await _signInManager.SignInAsync(user, isPersistent: false);

                IList<string> roles = await _userManager.GetRolesAsync(user);
                //user.Roles = _role
                await _userManager.AddToRolesAsync(user, roles);
                //await roles.ToList().ToAsyncEnumerable<string>().ForEachAsync<string>(async (t) =>
                //    {
                //        if (!await _userManager.IsInRoleAsync(user, t))
                //        {
                //            await _userManager.AddToRoleAsync(user, t);
                //        }
                //        _roleManager.
                //    });
               ClaimsPrincipal cp =  await _signInManager.CreateUserPrincipalAsync(user);
                return (ClaimsIdentity)cp.Identity;
                ////if (_userManager.SupportsUserRole)
                ////{
                //var myroles = await _userManager.GetRolesAsync(user);
                //foreach (var roleName in myroles)
                //{
                //    id.AddClaim(new Claim(Options.ClaimsIdentity.RoleClaimType, roleName));
                //    if (_roleManager.SupportsRoleClaims)
                //    {
                //        var role = await _roleManager.FindByNameAsync(roleName);
                //        if (role != null)
                //        {
                //            id.AddClaims(await _roleManager.GetClaimsAsync(role));
                //        }
                //    }
                //}
                //}
                //return user;
            }

            if (result == SignInResult.TwoFactorRequired)
            {
                //Claim c1 = new Claim("http://msde/claims/loginerror", "Two Factor Error", "Two Factor Required");
                //roleclaims.Add(c1);
                return await Task.FromResult(new ClaimsIdentity(new GenericIdentity(login.Email, "Error"), roleclaims));
            }

            return await Task.FromResult<ClaimsIdentity>(null);
        }

        /// <summary>
        /// Verfication of currently user password against Old Mars database
        /// </summary>
        /// <param name="plainText"></param>
        /// <param name="hashValue"></param>
        /// <returns></returns>
        public static bool Verify(string plainText, string hashValue)
        {
            byte[] buffer = Convert.FromBase64String(hashValue);
            int num = 0x200;
            int num2 = num / 8;
            if (buffer.Length < num2)
            {
                return false;
            }
            byte[] saltBytes = new byte[buffer.Length - num2];
            for (int i = 0; i < saltBytes.Length; i++)
            {
                saltBytes[i] = buffer[num2 + i];
            }
            string str = Compute(plainText, saltBytes);
            return (hashValue == str);
        }

        /// <summary>
        /// Salt the old password for comparison
        /// </summary>
        /// <param name="plainText"></param>
        /// <param name="saltBytes"></param>
        /// <returns></returns>
        public static string Compute(string plainText, byte[] saltBytes)
        {
            int num4;
            if (saltBytes == null)
            {
                int minValue = 4;
                int maxValue = 8;
                
                Random random = new Random();
                saltBytes = new byte[random.Next(minValue, maxValue)];
                using (var rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(saltBytes);
                }
            }
            byte[] bytes = Encoding.UTF8.GetBytes(plainText);
            byte[] buffer = new byte[bytes.Length + saltBytes.Length];
            for (num4 = 0; num4 < bytes.Length; num4++)
            {
                buffer[num4] = bytes[num4];
            }
            for (num4 = 0; num4 < saltBytes.Length; num4++)
            {
                buffer[bytes.Length + num4] = saltBytes[num4];
            }

            using (var sha = SHA512.Create())
            {
                var buffer3 = sha.ComputeHash(buffer);
                byte[] inArray = new byte[buffer3.Length + saltBytes.Length];
                for (num4 = 0; num4 < buffer3.Length; num4++)
                {
                    inArray[num4] = buffer3[num4];
                }
                for (num4 = 0; num4 < saltBytes.Length; num4++)
                {
                    inArray[buffer3.Length + num4] = saltBytes[num4];
                }
                return Convert.ToBase64String(inArray);
            }
        }

        #endregion

    }
}
