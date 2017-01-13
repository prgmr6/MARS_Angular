using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities;
using Msde.Mars.Business.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Repositories
{
    public class MarsDatabase : DbContext
    {

        #region Class fields and properties

        /// <summary>
        /// context options passed in from startup
        /// </summary>
        DbContextOptions<MarsDatabase> _options;

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Breadcrumb_Links> MARS_Breadcrumb_Links { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Breadcrumbs> MARS_Breadcrumbs { get; set; }

        /// <summary>
        /// MARS_Images
        /// </summary>
        public DbSet<MARS_Images> MARS_Images { get; set; }

           /// <summary>
        /// MARS_Page
        /// </summary>
        public DbSet<MARS_Page> MARS_Page { get; set; }

        /// <summary>
        /// MARS_Page_TopText
        /// </summary>
        public DbSet<MARS_Page_TopText> MARS_Page_TopText { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_PageText> MARS_PageText { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_QuickLinks> MARS_QuickLinks { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Quicklinks_Links> MARS_QuickLinks_Links { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Blog> MARS_Blog { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Blog_Entry> MARS_Blog_Entry { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Blog_Entry_Tags> MARS_Blog_Entry_Tags { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Blog_Entry_Category> MARS_Blog_Entry_Category { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Tags> MARS_Tags { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MARS_Blog_Category> MARS_Blog_Category { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MST_Intra_User_Profile> MST_Intra_User_Profile { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<MST_Inter_User_Profile> MST_Inter_User_Profile { get; set; }

       

        #endregion

        #region Class methods

        /// <summary>
        /// ctor
        /// </summary>
        /// <param name="options"></param>
        public MarsDatabase(DbContextOptions<MarsDatabase> options) : base(options)
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
            builder.Entity<MARS_Breadcrumb_Links>().ToTable("MARS_Breadcrumb_Links", "dbo");
            builder.Entity<MARS_Breadcrumbs>().ToTable("MARS_Breadcrumbs", "dbo");
            builder.Entity<MARS_Images>().ToTable("MARS_Images", "dbo");
            builder.Entity<MARS_Page>().ToTable("MARS_Page", "dbo");
            builder.Entity<MARS_Page_TopText>().ToTable("MARS_Page_TopText", "dbo");
            builder.Entity<MARS_PageText>().ToTable("MARS_PageText", "dbo");
            builder.Entity<MARS_QuickLinks>().ToTable("MARS_QuickLinks", "dbo");
            builder.Entity<MARS_Quicklinks_Links>().ToTable("MARS_Quicklinks_Links", "dbo");
            builder.Entity<MARS_Blog>().ToTable("MARS_Blog", "dbo");
            builder.Entity<MARS_Blog_Entry>().ToTable("MARS_Blog_Entry", "dbo");
            builder.Entity<MARS_Blog_Entry_Tags>().ToTable("MARS_Blog_Entry_Tags", "dbo");
            builder.Entity<MARS_Blog_Entry_Category>().ToTable("MARS_Blog_Entry_Category", "dbo");
            builder.Entity<MARS_Blog_Category>().ToTable("MARS_Blog_Category", "dbo");
            builder.Entity<MARS_Tags>().ToTable("MARS_Tags", "dbo");
            builder.Entity<MST_Intra_User_Profile>().ToTable("MST_Intra_User_Profile", "dbo");
            builder.Entity<MST_Inter_User_Profile>().ToTable("MST_Inter_User_Profile", "dbo");
        }

        #endregion

    }
}
