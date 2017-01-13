using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class MARS_PageText
    {
        public int id { get; set; }
        public string HeaderText {get;set;}
        public string SupportingText { get; set; }
        public int MARS_Pageid { get; set; }

    }
}
