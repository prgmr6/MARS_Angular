using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;

namespace Msde.Mars.Repositories
{
    public class EventDatabase : DbContext
    {

        #region Class fields and properties

        /// <summary>
        /// context options passed in from startup
        /// </summary>
        DbContextOptions<EventDatabase> _options;

        /// <summary>
        /// Users
        /// </summary>
        public DbSet<EventStream> EventStreams { get; set; }

        #endregion

        #region Class methods

        /// <summary>
        /// ctor
        /// </summary>
        /// <param name="options"></param>
        public EventDatabase(DbContextOptions<EventDatabase> options) : base(options)
        {
            _options = options;
        }

        /// <summary>
        /// On Model Creation Override
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<EventStream>().ToTable("EventStream", "dbo");
        }

        #endregion

    }
}
