import { Typography } from "@/components/ui/typography"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

export function ElementsSection() {
  return (
    <SectionWrapper
      id="elements"
      title="HTML Elements"
      description="Default styles for native HTML elements without additional classes."
    >
      <Subsection title="Headings">
        <div className="space-y-4">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </Subsection>

      <Subsection title="Paragraphs">
        <div className="space-y-4">
          <p>
            A paragraph (from the Greek paragraphos, &quot;to write beside&quot; or &quot;written
            beside&quot;) is a self-contained unit of a discourse in writing dealing with a
            particular point or idea. A paragraph consists of one or more sentences. Though not
            required by the syntax of any language, paragraphs are usually an expected part of
            formal writing, used to organize longer prose.
          </p>
          <p>
            <strong>Bold paragraph</strong> – Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Suspendisse <a href="#">link example</a> vel nisi accumsan pretium.
          </p>
        </div>
      </Subsection>

      <Subsection title="Blockquotes">
        <blockquote>
          <p>
            A block quotation (also known as a long quotation or extract) is a quotation in a
            written document, that is set off from the main text as a paragraph, or block of text.
          </p>
          <p>
            It is typically distinguished visually using indentation and a different typeface or
            smaller size quotation. It may or may not include a citation, usually placed at the
            bottom.
          </p>
          <cite>
            <a href="#">Said no one, ever.</a>
          </cite>
        </blockquote>
      </Subsection>

      <Subsection title="Lists">
        <div className="space-y-6">
          <div>
            <Typography variant="h4" className="mb-3">
              Definition List
            </Typography>
            <dl>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
            </dl>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">
              Ordered List
            </Typography>
            <ol>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>
                List Item 3 with nested list
                <ol>
                  <li>Nested item 1</li>
                  <li>Nested item 2</li>
                </ol>
              </li>
            </ol>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">
              Unordered List
            </Typography>
            <ul>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>
                List Item 3 with nested list
                <ul>
                  <li>Nested item 1</li>
                  <li>Nested item 2</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Subsection>

      <Subsection title="Tables">
        <table>
          <caption>Table Caption</caption>
          <thead>
            <tr>
              <th>Table Heading 1</th>
              <th>Table Heading 2</th>
              <th>Table Heading 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
            </tr>
            <tr>
              <td>Table Cell 1</td>
              <td>Table Cell 2</td>
              <td>Table Cell 3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Table Footer 1</th>
              <th>Table Footer 2</th>
              <th>Table Footer 3</th>
            </tr>
          </tfoot>
        </table>
      </Subsection>

      <Subsection title="Code Elements">
        <div className="space-y-4">
          <p>
            <strong>Keyboard input:</strong> <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
          </p>
          <p>
            <strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code>
          </p>
          <p>
            <strong>Sample output:</strong>{" "}
            <samp>This is sample output from a computer program.</samp>
          </p>
          <div>
            <strong>Pre-formatted text:</strong>
            <pre>
              {`P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O`}
            </pre>
          </div>
        </div>
      </Subsection>

      <Subsection title="Inline Elements">
        <div className="space-y-3">
          <p>
            <a href="#">This is a text link</a>.
          </p>
          <p>
            <strong>Strong is used to indicate strong importance.</strong>
          </p>
          <p>
            <em>This text has added emphasis.</em>
          </p>
          <p>
            <del>This text is deleted</del> and <ins>This text is inserted</ins>.
          </p>
          <p>
            <s>This text has a strikethrough</s>.
          </p>
          <p>
            Superscript<sup>®</sup>.
          </p>
          <p>
            Subscript for things like H<sub>2</sub>O.
          </p>
          <p>
            Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
          </p>
          <p>
            <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
              This text is a short inline quotation.
            </q>
          </p>
          <p>
            <cite>This is a citation.</cite>
          </p>
          <p>
            The <dfn>dfn element</dfn> indicates a definition.
          </p>
          <p>
            The <mark>mark element</mark> indicates a highlight.
          </p>
          <p>
            The <var>variable element</var>, such as <var>x</var> = <var>y</var>.
          </p>
          <p>
            The time element: <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
          </p>
        </div>
      </Subsection>

      <Subsection title="Horizontal Rule">
        <p>Content above the rule.</p>
        <hr />
        <p>Content below the rule.</p>
      </Subsection>
    </SectionWrapper>
  )
}
