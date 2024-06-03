using Microsoft.EntityFrameworkCore;

namespace Erflix.API.Infrastructure.Databases.Configurations
{
    public static class RegisterDatabasesExtension
    {
        public static IServiceCollection AddDatabaseErflixContext(this IServiceCollection services, IConfiguration configuration)
        {
            string cs = configuration.GetConnectionString("erflix_context_postgresql")!;
            services.AddDbContext<ErflixContext>(options =>
            {
                options.UseNpgsql(cs, c => c.MigrationsAssembly("Erflix.API"));
            }
           );
            return services;
        }
    }
}
