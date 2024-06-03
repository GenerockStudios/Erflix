using Microsoft.EntityFrameworkCore;

namespace Erflix.API.Infrastructure.Databases.Initializers
{
    public static class InitializeErflixContextExtension
    {
        /// <summary>
        /// This extension Initialize Erflix database
        /// </summary>
        /// <param name="serviceProvider">Service provider of scope, of your application</param>
        /// <returns></returns>
        public async static Task<IServiceProvider> InitializeErflixContext(this IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<ErflixContext>();
            await context.Database.MigrateAsync();
            return serviceProvider;
        }
    }
}
