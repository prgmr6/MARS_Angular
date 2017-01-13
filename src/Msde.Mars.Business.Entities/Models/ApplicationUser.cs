using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Msde.Mars.Business.Entities
{
    public class ApplicationUser: IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string RequestorUserName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        [NotMapped]
        public List<string> errors { get; set; }
        //public int LegacyPortalUserId { get; set; }
        //public int LegacyIntraUserId { get; set; }
        //public int LegacyContactId { get; set; }
    }
}
