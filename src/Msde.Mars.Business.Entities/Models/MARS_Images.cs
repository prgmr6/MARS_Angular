using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Images
    {

        
        public int id { get; set; }
        public int MARS_Pageid { get; set; }
        public string image { get; set; }
        public string description { get; set; }
        public string imagename { get; set; }

    }
}
