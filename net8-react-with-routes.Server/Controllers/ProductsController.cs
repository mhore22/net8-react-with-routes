using Microsoft.AspNetCore.Mvc;

namespace net8_react_with_routes.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        [HttpPost("create-checkout-products")]
        public string CreateCheckoutProducts([FromBody] string email)
        {
            // Add your logic here to create a checkout session
            // For now, it simply returns a string
            return $"Products has been checked out for {email}!";
        }
        
    }
}
