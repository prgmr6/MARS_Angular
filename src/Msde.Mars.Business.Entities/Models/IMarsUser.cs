using System;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities
{
    public abstract class IMarsUser
    {
        [Key]
        public int userid { get; set; }
        public string username { get; set; }
        public string full_name { get; set; }
        public string description { get; set; }
        public string user_password { get; set; }
        public bool isEnabled { get; set; }
        public bool isLocked { get; set; }
        public bool isForcedPasswdChg { get; set; }
        public string requestor_id { get; set; }
        public DateTime update_dt { get; set; }
        public DateTime create_dt { get; set; }
        public string email { get; set; }
        public string phone { get; set; }

    

    }
}
