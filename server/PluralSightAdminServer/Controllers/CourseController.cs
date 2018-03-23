using PluralSightAdminServer.Data;
using PluralSightAdminServer.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PluralSightAdminServer.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CourseController : ApiController
    {
        private readonly DataBase dataBase;

        public CourseController()
        {
            dataBase = DataBase.Instance;
        }

        public IEnumerable<Course> Get()
        {
            return dataBase.GetCourses();
        }

        public Course Get(int id)
        {
            return dataBase.GetCourse(id);
        }

        public Course Post(Course course)
        {
            return dataBase.SaveCourse(course);
        }

        public void Delete(int id)
        {
            dataBase.DeleteCourse(id);
        }
    }
}
