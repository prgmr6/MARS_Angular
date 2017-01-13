using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities;
using Msde.Mars.Business.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Repositories
{
    public class OldMarsDatabase: DbContext
    {
        /// <summary>
        /// context options passed in from startup
        /// </summary>
        DbContextOptions<OldMarsDatabase> _options;
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Dashboard1> Reports { get; set; }

        public OldMarsDatabase(DbContextOptions<OldMarsDatabase> options): base(options)
        {
            _options = options;
            this.Database.SetCommandTimeout(99999999);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }

   
}
