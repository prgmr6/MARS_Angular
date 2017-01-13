using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Roles
    {
        public MARS_Roles()
        {
            UserRoles = new HashSet<MARS_UserRoles>();
            RoleClaims = new HashSet<MARS_RoleClaims>();
        }
        [Key]
        public string Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }

        public ICollection<MARS_UserRoles> UserRoles { get; set; }
        public ICollection<MARS_RoleClaims> RoleClaims { get; set; }
    }
}
