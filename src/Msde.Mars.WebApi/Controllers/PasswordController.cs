using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Msde.Mars.Business.Entities;
using Msde.Mars.Business.Entities.AccountViewModels;
using Msde.Mars.Business.Entities.ManageViewModels;
using Msde.Mars.Repositories;
using System.Threading.Tasks;
namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class PasswordController: Controller
    {

        #region class fields and properties

        /// <summary>
        /// 
        /// </summary>
        private readonly UserManager<ApplicationUser> _userManager;

        /// <summary>
        /// 
        /// </summary>
        private readonly SignInManager<ApplicationUser> _signInManager;

        /// <summary>
        /// 
        /// </summary>
        private readonly RoleManager<IdentityRole> _roleManager;

        /// <summary>
        /// 
        /// </summary>
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _claimsFactory;

        /// <summary>
        /// 
        /// </summary>
        private ApplicationDbContext _ctx = null;

        #endregion

        #region class methods

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="userManager"></param>
        /// <param name="signInManager"></param>
        public PasswordController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _ctx = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        /// <summary>
        /// Change password will change the user password, and then log the user in and get token created.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        /// Ys8#ag(aghP13
        [HttpPost]
        public async Task<object> Post([FromBody]ChangePasswordViewModel model)
        {
            var user = await _userManager.FindByNameAsync(model.Email); /*await GetCurrentUserAsync();*/
            if (user != null)
            {
                var Password = "Ys8#ag(aghP13";

                var result = await _userManager.ChangePasswordAsync(user, Password, model.NewPassword);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                }else
                {
                    return result;
                }
            }
            return user;
        }

        #endregion
    }
}
