using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_UserRoles
    {
        [Key]
        public string UserId { get; set; }
        public string RoleId { get; set; }
        public MARS_Roles Role { get; set; }
        public MARS_Users User { get; set; }
    }
}
