using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Msde.Mars.Business.Entities.Requests;
using Msde.Mars.Business.Entities.Responses;
using Msde.Mars.Service;
using System;
using System.Threading.Tasks;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class InputValueChangedEventController
    {
        private readonly IEventStreamService _service;

        /// <summary>
        /// Initializes a new instance of the <see cref="InputValueChangedEventController" /> class.
        /// </summary>
        /// <param name="service">The <see cref="EventStreamService "/> instance.
        /// </param>
        public InputValueChangedEventController(IEventStreamService service)
        {
            if (service == null)
            {
                throw new ArgumentNullException(nameof(service));
            }

            this._service = service;
        }

        /// <summary>
        /// Gets the event stream.
        /// </summary>
        /// <returns>Returns the <see cref="EventStreamCreateResponse" /> instance.
        /// </returns>
        [HttpGet]
        [Route("stream")]
        public virtual async Task<EventStreamCreateResponse> GetEventStream()
        {
            var request = new EventStreamCreateRequest() { StreamId = Guid.NewGuid() };
            var response = await this._service.CreateEventStreamAsync(request);
            return response;
        }


        [HttpPost]
        [Route("breadcrumb-changed")]
        public virtual async Task<BreadCrumbChangeResponse> SetBreadCrumb([FromBody] BreadCrumbChangeRequest request)
        {
            var response = await this._service.ChangeBreadCrumbAsync(request);
            return response; 
        }



        /// <summary>
        /// Sets the salutation value.
        /// </summary>
        /// <param name="request">The <see cref="SalutationChangeRequest" /> instance.</param>
        /// <returns>Returns the <see cref="SalutationChangeResponse" /> instance.</returns>
        [HttpPost]
        [Route("salutation-changed")]
        public virtual async Task<SalutationChangeResponse> SetSalutation([FromBody] SalutationChangeRequest request)
        {
            var response = await this._service.ChangeSalutationAsync(request);
            return response;
        }

        /// <summary>
        /// Sets the username value.
        /// </summary>
        /// <param name="request">The <see cref="UsernameChangeRequest" /> instance.</param>
        /// <returns>Returns the <see cref="UsernameChangeResponse" /> instance.</returns>
        [HttpPost]
        [Route("username-changed")]
        public virtual async Task<UsernameChangeResponse> SetUsername([FromBody] UsernameChangeRequest request)
        {
            var response = await this._service.ChangeUsernameAsync(request);
            return response;
        }

        /// <summary>
        /// Sets the email value.
        /// </summary>
        /// <param name="request">The <see cref="EmailChangeRequest" /> instance.</param>
        /// <returns>Returns the <see cref="EmailChangeResponse" /> instance.</returns>
        [HttpPost]
        [Route("email-changed")]
        public virtual async Task<EmailChangeResponse> SetEmail([FromBody] EmailChangeRequest request)
        {
            var response = await this._service.ChangeEmailAsync(request);
            return response;
        }

        /// <summary>
        /// Sets the user.
        /// </summary>
        /// <param name="request">The <see cref="UserCreateRequest" /> instance.</param>
        /// <returns>Returns the <see cref="UserCreateResponse" /> instance.</returns>
        [HttpPost]
        [Route("registration")]
        public virtual async Task<UserCreateResponse> SetUser([FromBody] UserCreateRequest request)
        {
            var response = await this._service.CreateUserAsync(request);
            return response;
        }
    }
}
