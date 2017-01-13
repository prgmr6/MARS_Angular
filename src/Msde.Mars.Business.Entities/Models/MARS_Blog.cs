using System.Collections.Generic;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Blog
    {
        public MARS_Blog()
        {
            MARS_Blog_Entrys = new HashSet<MARS_Blog_Entry>();
        }
        public int id { get; set; }
        public string title { get; set; }

        public ICollection<MARS_Blog_Entry> MARS_Blog_Entrys { get; set; }
    }
}
