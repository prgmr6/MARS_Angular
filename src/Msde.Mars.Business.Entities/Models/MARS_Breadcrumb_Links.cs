using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Breadcrumb_Links
    {

        public int id { get; set; }
        public int MARS_Breadcrumbsid { get; set;}
        public string url { get; set; }
        public string urltext { get; set; }

    }
}
