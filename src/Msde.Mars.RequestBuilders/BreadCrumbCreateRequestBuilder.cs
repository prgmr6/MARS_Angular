using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Msde.Mars.EventHandlers;
using Msde.Mars.Business.Entities.Requests;
namespace Msde.Mars.RequestBuilders
{
    public class BreadCrumbCreateRequestBuilder : IRequestBuilder
    {
        private readonly IEnumerable<IEventHandler> _handlers;

        private bool _disposed;

        /// <summary>
        /// Initializes a new instance of the <see cref="BreadCrumbCreateRequestBuilder" /> class.
        /// </summary>
        /// <param name="handlers">The list of event handler instances.</param>
        public BreadCrumbCreateRequestBuilder(params IEventHandler[] handlers)
        {
            if (handlers == null)
            {
                throw new ArgumentNullException(nameof(handlers));
            }

            this._handlers = handlers;
        }

        /// <summary>
        /// Builds requests asynchronously.
        /// </summary>
        /// <param name="request">The request.</param>
        /// <returns>Returns <see cref="Task" />.</returns>
        public async Task BuildAsync(BaseRequest request)
        {
            var handlers = this._handlers.Where(p => p.CanBuild<BreadCrumbCreateRequest>(request));
            foreach (var handler in handlers)
            {
                await handler.BuildRequestAsync(request);
            }
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public virtual void Dispose()
        {
            if (this._disposed)
            {
                return;
            }

            this._disposed = true;
        }
    }
}
