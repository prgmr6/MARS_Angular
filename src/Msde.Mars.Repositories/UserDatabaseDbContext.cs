using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;

namespace Msde.Mars.Repositories
{
    public class UserDatabaseDbContext:DbContext
    {
        DbContextOptions<UserDatabaseDbContext> _options;

        public UserDatabaseDbContext(DbContextOptions<UserDatabaseDbContext> options) : base(options) {
            _options = options;
        }

        public DbSet<MARS_Users> MARS_User { get; set; }
        public DbSet<MARS_UserTokens> MARS_UserTokens { get; set; }
        public DbSet<MARS_UserRoles> MARS_UserRoles { get; set; }
        public DbSet<MARS_UserLogins> MARS_UserLogins { get; set; }
        public DbSet<MARS_UserClaims> MARS_UserClaims { get; set; }
        public DbSet<MARS_Roles> MARS_Roles { get; set; }
        public DbSet<MARS_RoleClaims> MARS_RoleClaims { get; set; }
        public DbSet<MST_Intra_User_Profile> MST_Intra_User_Profiles { get; set; }
        public DbSet<MST_Inter_User_Profile> MST_Inter_User_Profiles { get; set; }

    }
}
