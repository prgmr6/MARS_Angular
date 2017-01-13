using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Quicklinks_Links
    {
        [Key]
        public int id { get; set; }
        public int MARS_QuickLinksid { get; set; }
        public string url { get; set; }
        public string urltext { get; set; }
    }
}
