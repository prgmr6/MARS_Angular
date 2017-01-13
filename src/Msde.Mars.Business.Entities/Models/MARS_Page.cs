using System.Collections.Generic;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Page
    {
        public MARS_Page()
        {
            MARS_PageTexts = new HashSet<MARS_PageText>();
            MARS_Quicks = new HashSet<MARS_QuickLinks>();
            MARS_Page_TopTexts = new HashSet<MARS_Page_TopText>();
            MARS_Crumbs = new HashSet<MARS_Breadcrumbs>();
            MARS_Images = new HashSet<MARS_Images>();
        }
        public int id { get; set; }
        public string pagename { get; set; }
        public string pagetext { get; set; }
        public int? parent { get; set; }

        public ICollection<MARS_PageText> MARS_PageTexts { get; set; }
        public ICollection<MARS_QuickLinks> MARS_Quicks { get; set; }
        public ICollection<MARS_Images> MARS_Images { get; set; }
        public ICollection<MARS_Page_TopText> MARS_Page_TopTexts { get; set; }
        public ICollection<MARS_Breadcrumbs> MARS_Crumbs { get; set; }

    }
}
