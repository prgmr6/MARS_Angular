using Msde.Mars.Business.Entities.Responses.Data;

namespace Msde.Mars.Business.Entities.Responses
{
    /// <summary>
    /// This represents the base response entity.
    /// </summary>
    /// <typeparam name="T">Type of response data.</typeparam>
    public abstract class BaseResponse<T> where T : BaseResponseData
    {
        /// <summary>
        /// Gets or sets the data.
        /// </summary>
        public T Data { get; set; }

        /// <summary>
        /// Gets or sets the error message.
        /// </summary>
        public ResponseError Error { get; set; }
    }
}