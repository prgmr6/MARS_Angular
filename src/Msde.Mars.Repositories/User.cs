using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Msde.Mars.Repositories
{
    [Table("User")]
    public partial class Users
    {
        public int UserId { get; set; }

        [Required]
        [StringLength(8)]
        public string Title { get; set; }

        [Required]
        [StringLength(256)]
        public string Name { get; set; }

        [Required]
        [StringLength(256)]
        public string Email { get; set; }
    }

    [Table("MARS_BreadCrumbLinks")]
    public partial class BreadCrumb
    {
        public int id { get; set; }
        public string BreadCrumbText { get; set; }
        public int MARS_Pageid { get; set; }

    }
}
