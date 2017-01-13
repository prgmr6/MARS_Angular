using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities;
using Msde.Mars.Business.Entities.Models;
using System;
using System.Threading.Tasks;

namespace Msde.Mars.Repositories
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        #region Class fields and properties

        /// <summary>
        ///
        /// </summary>
        private DbContextOptions<ApplicationDbContext> _options;

        /// <summary>
        ///
        /// </summary>
        private readonly UserManager<ApplicationUser> _userManager;

        /// <summary>
        ///
        /// </summary>
        private readonly RoleManager<IdentityRole> _roleManager;

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_Users> MARS_User { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_UserTokens> MARS_UserTokens { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_UserRoles> MARS_UserRoles { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_UserLogins> MARS_UserLogins { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_UserClaims> MARS_UserClaims { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_Roles> MARS_Roles { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MARS_RoleClaims> MARS_RoleClaims { get; set; }

        /// <summary>
        ///
        /// </summary>
        public DbSet<MST_Intra_User_Profile> MST_Intra_User_Profiles { get; set; }

        /// <summary>
        ///
        /// </summary>
        //public DbSet<MST_Inter_Group> MST_Inter_Groups { get; set; }

        ///// <summary>
        /////
        ///// </summary>
        //public DbSet<MST_Inter_Group_operation> MST_Inter_Group_Operations { get; set; }

        ///// <summary>
        /////
        ///// </summary>
        //public DbSet<MST_Inter_Operation> MST_Inter_Operations { get; set; }

        ///// <summary>
        /////
        ///// </summary>
        //public DbSet<MST_Intra_Group> MST_Intra_Groups { get; set; }

        ///// <summary>
        /////
        ///// </summary>
        //public DbSet<MST_Intra_Group_operation> MST_Intra_Group_Operations { get; set; }

        ///// <summary>
        /////
        ///// </summary>
        //public DbSet<MST_Intra_Operation> MST_Intra_Operations { get; set; }

        #endregion Class fields and properties

        #region Class methods

        /// <summary>
        ///
        /// </summary>
        /// <param name="options"></param>
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            //base.Database.EnsureCreated();
            _options = options;
            //base.Database.Migrate();
            _roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(this),
                null, null, null, null, null);
            _userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(this),
                null, null, null, null, null, null, null, null);
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>().ToTable("MARS_Roles", "dbo");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("MARS_RoleClaims", "dbo");
            builder.Entity<IdentityUserClaim<string>>().ToTable("MARS_UserClaims", "dbo");
            //builder.Entity<IdentityUserLogin<string>>().ToTable("MARS_UserLogins", "dbo");
            builder.Entity<IdentityUserRole<string>>().ToTable("MARS_UserRoles", "dbo");
            builder.Entity<IdentityUserToken<string>>().ToTable("MARS_UserTokens", "dbo");
            builder.Entity<ApplicationUser>().ToTable("MARS_Users", "dbo");
            builder.Entity<MST_Inter_User_Profile>().ToTable("MST_Inter_User_Profile", "dbo");
            builder.Entity<MST_Intra_User_Profile>().ToTable("MST_Intra_User_Profile", "dbo");
            //builder.Entity<MST_Inter_Group>().ToTable("MST_Inter_Group", "dbo");
            //builder.Entity<MST_Inter_Group_operation>().ToTable("MST_Inter_Group_operation", "dbo");
            //builder.Entity<MST_Inter_Operation>().ToTable("MST_Inter_Operation", "dbo");
            //builder.Entity<MST_Intra_Group>().ToTable("MST_Intra_Group", "dbo");
            //builder.Entity<MST_Intra_Group_operation>().ToTable("MST_Intra_Group_operation", "dbo");
            //builder.Entity<MST_Intra_Operation>().ToTable("MST_Intra_Operation", "dbo");
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public Task<bool> RoleExists(string name)
        {
            //var rm = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new
            //ApplicationDbContext(_options)));
            //return rm.RoleExistsAsync(name);
            throw new NotImplementedException();
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public Task<bool> CreateRole(string name)
        {
            //var rm = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new
            //ApplicationDbContext(_options)));
            //return rm.CreateAsync(new IdentityRole(name));
            throw new NotImplementedException();
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public Task<bool> CreateUser(ApplicationUser user, string password)
        {
            //var um = new UserManager<ApplicationUser>(
            //    new UserStore<ApplicationUser>(new ApplicationDbContext(_options)));
            //return um.CreateAsync(user, password);
            throw new NotImplementedException();
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public Task<bool> AddUserToRole(ApplicationUser userId, string roleName)
        {
            //var um = new UserManager<ApplicationUser>(
            //    new UserStore<ApplicationUser>(new ApplicationDbContext(_options)));
            //return um.AddToRoleAsync(userId, roleName);
            throw new NotImplementedException();
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="userId"></param>
        public void ClearUserRoles(string userId)
        {
            //var um = new UserManager<ApplicationUser>(
            //    new UserStore<ApplicationUser>(new ApplicationDbContext(_options)));
            //var user = um.FindByIdAsync(userId);
            //var currentRoles = new List<IdentityUserRole>();
            //currentRoles.AddRange(user.Roles);
            //foreach (var role in currentRoles)
            //{
            //    um.RemoveFromRoleAsync(userId, role.Role.Name);
            //}
            throw new NotImplementedException();
        }

        #endregion Class methods
    }
}