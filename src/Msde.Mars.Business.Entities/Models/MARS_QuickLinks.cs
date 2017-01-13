using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_QuickLinks
    {

        public MARS_QuickLinks()
        {
            Links = new HashSet<MARS_Quicklinks_Links>();
        }
        public int id { get; set; }
        public string Quicklinktext { get; set; }
        public int MARS_Pageid { get; set; }

        public ICollection<MARS_Quicklinks_Links> Links { get; set; }
    }
}
