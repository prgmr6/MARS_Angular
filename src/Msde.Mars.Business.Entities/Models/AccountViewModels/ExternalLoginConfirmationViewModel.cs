using System.ComponentModel.DataAnnotations;

namespace Msde.Mars.Business.Entities.AccountViewModels
{

    public class ExternalLoginConfirmationViewModel
    {

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
