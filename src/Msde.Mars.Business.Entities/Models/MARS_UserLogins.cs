using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_UserLogins
    {
        [Key]
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set;}
        public string ProviderDisplayName { get; set; }
        public string UserId { get; set; }
        public MARS_Users User { get; set; }
    }
}
