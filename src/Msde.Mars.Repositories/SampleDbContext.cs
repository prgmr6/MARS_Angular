using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;

namespace Msde.Mars.Repositories
{
    public partial class SampleDbContext : DbContext
    {
        DbContextOptions<SampleDbContext> _options;
        public DbSet<EventStream> EventStreams { get; set; }
        public DbSet<Users> Users { get; set; }

        public SampleDbContext(DbContextOptions<SampleDbContext> options): base(options)
        {
            _options = options;
        }

        

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<EventStream>().ToTable("EventStream", "dbo");
            builder.Entity<Users>().ToTable("User", "dbo");
        }
    }
}
