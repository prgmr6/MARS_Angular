using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_Tags
    {
        public MARS_Tags()
        {
            MARS_Blog_Entry_Categorys = new HashSet<MARS_Blog_Entry_Category>();
        }
        [Key]
        public int id { get; set; }
        public string tag { get; set; }

        public ICollection<MARS_Blog_Entry_Category> MARS_Blog_Entry_Categorys { get; set; }
    }
}
