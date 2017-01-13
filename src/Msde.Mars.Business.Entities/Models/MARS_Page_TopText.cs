using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Page_TopText
    {
        public int id { get; set; }
        public int MARS_Pageid { get; set; }
        public string text { get; set; }
    }
}
