using Microsoft.EntityFrameworkCore;

namespace Erflix.API.Infrastructure.Databases
{
    public class ErflixContext: DbContext
    {
        public ErflixContext(DbContextOptions<ErflixContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Base call  
            base.OnModelCreating(builder);
        }
    }
}
