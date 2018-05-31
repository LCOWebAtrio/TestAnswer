using System;
using System.IO;
using System.Threading.Tasks;
using SimplisticImplementation.Utility;

namespace FileReader.Reader
{
    /// <summary>
    /// Manage a txet reading
    /// </summary>
    public class TextFileReader
    {
        /// <summary>
        /// Read the content of a text file
        /// </summary>
        /// <param name="filePath">File to read</param>
        /// <returns>Content of the text file</returns>
        public string ReadTextFile(string filePath)
        {
            if (filePath.EndsWith("/") || filePath.EndsWith("\\"))
                throw new ArgumentException("The requested path is not a file");

            //File must exists
            if (!File.Exists(filePath))
                throw new FileNotFoundException(string.Format("Text File {0} does not exist", filePath));

            if (!FileExtention.IsExtentionSupported(filePath))
                throw new ArgumentOutOfRangeException("Specified type is not supported");

            StreamReaderTool streamReaderTool = new StreamReaderTool();
            string fileContent = streamReaderTool.ReadFile(filePath);

            return fileContent;
        }
    }
}
