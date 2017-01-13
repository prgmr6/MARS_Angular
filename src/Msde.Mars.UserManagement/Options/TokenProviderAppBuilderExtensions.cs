using System;
using Microsoft.AspNetCore.Builder;

namespace Msde.Mars.UserManagement.Options
{
    public static class TokenProviderAppBuilderExtensions
    {
        public static IApplicationBuilder UseSimpleTokenProvider(this IApplicationBuilder app, TokenProviderOptions options)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            return app.UseMiddleware<TokenProviderMiddleware>(Microsoft.Extensions.Options.Options.Create(options));
        }
    }
}