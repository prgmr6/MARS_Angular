using System;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_UserTokens
    {
        public string UserId { get; set; }
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        [Key]
        public string Value { get; set; }
        
        public string TokenId { get; set; }
        public DateTime Expiry { get; set; }
        public MARS_Users User { get; set; }
    }
}
