using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class Mars_Users_Properties
    {
        [Key]
        public int Id { get; set; }
        public string MARS_Usersid { get; set; }
        public string DOB { get; set; }
        public string Title { get; set; }
        public int AddressId { get; set; }
        public string AgencyId { get; set; }
        public string AgencyNum { get; set; }
        public string SiteId { get; set; }
        public string SiteNum { get; set; }
        public string County { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public int LegacyPortalUserId { get; set; }
        public int LegacyIntraUserId { get; set; }
        public int LegacyContactId { get; set; }
        public MARS_Users User { get; set; }


    }
}
