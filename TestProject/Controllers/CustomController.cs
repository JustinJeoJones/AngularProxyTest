using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomController : ControllerBase
    {
        [HttpGet("hi")]
        public hi Hi() 
        {
            hi h = new hi();
            h.Hi = "Hello";
            return h;
        }
    }

    public class hi
    {
        public string Hi { get; set; }
    }
}
