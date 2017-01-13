using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_UserClaims
    {
        [Key]
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public string UserId { get; set; }
        public MARS_Users User { get; set; }
    }
}
