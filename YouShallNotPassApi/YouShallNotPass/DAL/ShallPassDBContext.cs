using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace YouShallNotPass.DAL
{
	
    public class ShallPassDBContext : DbContext
    {

        public ShallPassDBContext() : base("ShallPassConnectionString")
        {
            Database.SetInitializer<ShallPassDBContext>(null);
        }

        public DbSet<User> Users { get; set; }
      
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }

}
