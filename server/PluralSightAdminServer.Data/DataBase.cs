using PluralSightAdminServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PluralSightAdminServer.Data
{
    // Fake Database only for testing the React Redux app
    public class DataBase
    {
        private static List<Author> authors = new List<Author>
        {
            new Author
            {
                Id = 1,
                FirstName = "Cory",
                LastName = "House"
            },
            new Author
            {
                Id = 2,
                FirstName = "Scott",
                LastName = "Allen"
            },
            new Author
            {
                Id = 3,
                FirstName = "Dan",
                LastName = "Wahlin"
            }
        };

        private static List<Category> categories = new List<Category>
        {
            new Category
            {
                Id = 1,
                Title = "JavaScript"
            },
            new Category
            {
                Id = 2,
                Title = "Software Practices"
            },
            new Category
            {
                Id = 3,
                Title = "Software Architecture"
            },
            new Category
            {
                Id = 4,
                Title = "Career"
            },
            new Category
            {
                Id = 5,
                Title = "HTML5"
            },
        };

        private static List<Course> courses = new List<Course>
        {
            new Course
            {
                Id = 1,
                Title = "Building Applications in React and Flux",
                Url = "http://www.pluralsight.com/courses/react-flux-building-applications",
                Length = "5:08",
                AuthorId = 1,
                CategoryId = 1
            },
            new Course
            {
                Id = 2,
                Title = "Clean Code: Writing Code for Humans",
                Url = "http://www.pluralsight.com/courses/writing-clean-code-humans",
                Length = "3:10",
                AuthorId = 1,
                CategoryId = 2
            },
            new Course
            {
                Id = 3,
                Title = "Architecting Applications for the Real World",
                Url = "http://www.pluralsight.com/courses/architecting-applications-dotnet",
                Length = "2:52",
                AuthorId = 1,
                CategoryId = 3
            },
            new Course
            {
                Id = 4,
                Title = "Becoming an Outlier: Reprogramming the Developer Mind",
                Url = "http://www.pluralsight.com/courses/architecting-applications-dotnet",
                Length = "2:30",
                AuthorId = 1,
                CategoryId = 4
            },
            new Course
            {
                Id = 5,
                Title = "Web Component Fundamentals",
                Url = "http://www.pluralsight.com/courses/web-components-shadow-dom",
                Length = "5:10",
                AuthorId = 1,
                CategoryId = 5
            }
        };

        private static List<Chapter> chapters = new List<Chapter>
        {
            new Chapter
            {
                Id = 1,
                CourseId = 1,
                Title = "First",
                Length = "1"
            },
            new Chapter
            {
                Id = 2,
                CourseId = 1,
                Title = "Second",
                Length = "2"
            },
            new Chapter
            {
                Id = 3,
                CourseId = 1,
                Title = "Third",
                Length = "3"
            },
            new Chapter
            {
                Id = 4,
                CourseId = 2,
                Title = "First",
                Length = "1"
            },
            new Chapter
            {
                Id = 5,
                CourseId = 3,
                Title = "First",
                Length = "1"
            },
            new Chapter
            {
                Id = 6,
                CourseId = 3,
                Title = "Second",
                Length = "2"
            },
        };

        private static DataBase instance;

        private DataBase() { }

        public static DataBase Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new DataBase();
                }

                return instance;
            }
        }

        public List<Author> GetAuthors()
        {
            return authors;
        }

        public Author SaveAuthor(Author author)
        {
            var existing = authors.FirstOrDefault(x => x.Id == author.Id);

            if (existing != null)
            {
                existing.FirstName = author.FirstName;
                existing.LastName = author.LastName;
                existing.Image = author.Image;

                authors[authors.IndexOf(existing)] = existing;
            }
            else
            {
                author.Id = authors.Max(x => x.Id) + 1;
                authors.Add(author);
            }

            return author;
        }

        public void DeleteAuthor(int id)
        {
            if(!IsAuthorInUse(id))
            {
                authors = authors.Where(x => x.Id != id).ToList();
            }
            else
            {
                throw new Exception("Cannot delete author with active courses");
            }
        }

        private bool IsAuthorInUse(int id)
        {
            return courses.Any(x => x.AuthorId == id);
        }

        public List<Category> GetCategories()
        {
            return categories;
        }

        public Category SaveCategory(Category category)
        {
            var existing = categories.FirstOrDefault(x => x.Id == category.Id);

            if (existing != null)
            {
                existing.Title = category.Title;

                categories[categories.IndexOf(existing)] = existing;
            }
            else
            {
                category.Id = categories.Max(x => x.Id) + 1;
                categories.Add(category);
            }

            return category;
        }

        public void DeleteCategory(int id)
        {
            if (!IsCategoryInUse(id))
            {
                categories = categories.Where(x => x.Id != id).ToList();
            }
            else
            {
                throw new Exception("Cannot delete category used in courses");
            }
        }

        private bool IsCategoryInUse(int id)
        {
            return courses.Any(x => x.CategoryId == id);
        }

        public List<Course> GetCourses()
        {
            return courses.Select(x => new Course
            {
                Id = x.Id,
                Title = x.Title,
                Url = x.Url,
                Length = x.Length,
                CategoryId = x.CategoryId,
                CategoryTitle = categories.FirstOrDefault(c => c.Id == x.CategoryId).Title,
                AuthorId = x.AuthorId,
                AuthorName = authors.FirstOrDefault(a => a.Id == x.AuthorId).FullName
            }).ToList();
        }

        public Course GetCourse(int id)
        {
            return courses.Where(x => x.Id == id).Select(x => new Course
            {
                Id = x.Id,
                Title = x.Title,
                Url = x.Url,
                Length = x.Length,
                CategoryId = x.CategoryId,
                CategoryTitle = categories.FirstOrDefault(c => c.Id == x.CategoryId).Title,
                AuthorId = x.AuthorId,
                AuthorName = authors.FirstOrDefault(a => a.Id == x.AuthorId).FullName,
                Chapters = chapters.Where(c => c.CourseId == x.Id).ToList()
            }).FirstOrDefault();
        }

        public Course SaveCourse(Course course)
        {
            var existing = courses.FirstOrDefault(x => x.Id == course.Id);

            if (existing != null)
            {
                existing.Title = course.Title;
                existing.Url = course.Url;
                existing.Length = course.Length;
                existing.CategoryId = course.CategoryId;
                existing.AuthorId = course.AuthorId;

                courses[courses.IndexOf(existing)] = existing;
            }
            else
            {
                course.Id = courses.Max(x => x.Id) + 1;
                courses.Add(course);
            }

            var chapterWithIds = course.Chapters.Where(x => x.Id.HasValue);
            var chapterWithoutIds = course.Chapters.Where(x => !x.Id.HasValue);

            chapters = chapters.Where(x => x.CourseId != course.Id || chapterWithIds.Select(c => c.Id).Contains(x.Id)).ToList();

            foreach (var chapter in chapterWithoutIds)
            {
                chapter.Id = chapters.Max(x => x.Id.Value) + 1;
                chapter.CourseId = course.Id;
                chapters.Add(chapter);
            }

            return course;
        }

        public void DeleteCourse(int id)
        {
            courses = courses.Where(x => x.Id != id).ToList();
        }
    }
}
