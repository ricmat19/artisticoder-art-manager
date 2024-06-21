using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        readonly RequestDelegate _next;
        readonly ILogger<ExceptionMiddleware> _logger;
        readonly IHostEnvironment _environment;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment environment)
        {

        }

        public async Task InvokeAsync(HttpContext context){
            try{
                await _next(context);
            }catch(Exception exception){
                _logger.LogError(exception, exception.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = _environment.IsDevelopment() ?
                    new APIException(context.Response.StatusCode, exception.Message, exception.StackTrace?.ToString()) :
                    new APIException(context.Response.StatusCode, exception.Message, "Internal Server Error");

                //Section 7/28 (Parameters error)
                var options = new JsonSerializerOptions();

                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);

            }
        }
    }
}