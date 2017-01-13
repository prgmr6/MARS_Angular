using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Breadcrumbs
    {

        public MARS_Breadcrumbs()
        {
            Links = new HashSet<MARS_Breadcrumb_Links>();
        }

        public int id { get; set; }
        public string BreadCrumbText { get; set; }
        public int MARS_Pageid { get; set; }

        public ICollection<MARS_Breadcrumb_Links> Links { get; set; }
    }
}
