using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Blog_Category
    {

        public MARS_Blog_Category()
        {
            MARS_Blog_Entry_Categorys = new HashSet<MARS_Blog_Entry_Category>();
        }

        public int id { get; set; }
        public string categoryname { get; set; }

        public ICollection<MARS_Blog_Entry_Category> MARS_Blog_Entry_Categorys { get; set; }
    }
}
