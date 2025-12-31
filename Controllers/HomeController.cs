using Microsoft.AspNetCore.Mvc;

namespace NewYearGreeting.Controllers;

public class HomeController : Controller
{
    public IActionResult Index() => View();
}