using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Blog_Entry_Tags
    {
        public int id { get; set; }
        public int MARS_Blog_Entryid { get; set; }
        public int MARS_Tagsid { get; set; }

        public MARS_Tags MARS_Tags { get; set; }
        public MARS_Blog_Entry MARS_Blog_Entry { get; set; }
    }
}
