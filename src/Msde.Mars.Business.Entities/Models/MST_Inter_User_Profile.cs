using System;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MST_Inter_User_Profile : IMarsUser
    {

        public string first_name { get; set; }
        public string last_name { get; set; }
        public string AgencyId { get; set; }
        public bool confirmed { get; set; }



    }
}
