using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Users
    {
        public MARS_Users()
        {
            UserClaims = new HashSet<MARS_UserClaims>();
            UserLogins = new HashSet<MARS_UserLogins>();
            UserRoles = new HashSet<MARS_UserRoles>();
            UserTokens = new HashSet<MARS_UserTokens>();
        }

        [Key]
        public string Id { get; set; }
        public int AccessFailedCount { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTime? LockoutEnd { get; set; }
        public string NormalizedEmail { get; set; }
        public string NormalizedUserName { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string SecurityStamp { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public string username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string RequestorUsername { get; set; }

        public int? LegacyPortalUserId { get; set; }
        public int? LegacyIntraUserId { get; set; }
        public int? LegacyContactId { get; set; }

        public ICollection<MARS_UserClaims> UserClaims { get; set; }
        public ICollection<MARS_UserLogins> UserLogins { get; set; }
        public ICollection<MARS_UserRoles> UserRoles { get; set; }
        public ICollection<MARS_UserTokens> UserTokens { get; set; }
    }
}
