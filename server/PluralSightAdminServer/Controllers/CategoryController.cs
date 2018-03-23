using PluralSightAdminServer.Data;
using PluralSightAdminServer.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PluralSightAdminServer.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CategoryController : ApiController
    {
        private readonly DataBase dataBase;

        public CategoryController()
        {
            dataBase = DataBase.Instance;
        }

        public HttpResponseMessage Get()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, dataBase.GetCategories());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        public HttpResponseMessage Post(Category category)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, dataBase.SaveCategory(category));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        public HttpResponseMessage Delete(int id)
        {
            try
            {
                dataBase.DeleteCategory(id);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
