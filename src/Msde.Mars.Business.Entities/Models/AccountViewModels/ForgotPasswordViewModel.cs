using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
