using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Blog_Entry
    {
        public MARS_Blog_Entry()
        {
            MARS_Blog_Entry_Categorys = new HashSet<MARS_Blog_Entry_Category>();
            MARS_Blog_Entry_Tags = new HashSet<MARS_Blog_Entry_Tags>();

        }

        public int id { get; set; }
        public string title { get; set; }
        public DateTime blogdate { get; set; }
        public string blogtext { get; set; }
        public int MARS_Blogid { get; set; }

        public ICollection<MARS_Blog_Entry_Category> MARS_Blog_Entry_Categorys { get; set; }
        public ICollection<MARS_Blog_Entry_Tags> MARS_Blog_Entry_Tags { get; set; }
        public MARS_Blog MARS_Blog { get; set; }
    }
}
