using System.Collections.Generic;

namespace PluralSightAdminServer.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Length { get; set; }
        public int AuthorId { get; set; }
        public int CategoryId { get; set; }
        public string CategoryTitle { get; set; }
        public string AuthorName { get; set; }
        public List<Chapter> Chapters { get; set; }
    }
}
