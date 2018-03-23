namespace PluralSightAdminServer.Models
{
    public class Chapter
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        public string Length { get; set; }
        public int CourseId { get; set; }
    }
}
