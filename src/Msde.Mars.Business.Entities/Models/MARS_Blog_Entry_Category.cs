using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Blog_Entry_Category
    {
        public int id { get; set; }
        public int MARS_Blog_Entryid { get; set; }
        public int MARS_Blog_Categoryid { get; set; }

        public MARS_Blog_Entry MARS_Blog_Entry { get; set; }
        public MARS_Blog_Category MARS_Blog_Category { get; set; }
    }
}
